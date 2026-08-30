import { beforeEach, describe, expect, it } from "vitest";
import { useAdminStore } from "./admin-store";

describe("admin demo store", () => {
  beforeEach(() => useAdminStore.getState().reset());

  it("creates a member and grants points with a transaction", () => {
    useAdminStore.getState().addMember({
      name: "測試會員",
      email: "test@example.hk",
      phone: "",
    });
    const member = useAdminStore.getState().members[0];
    useAdminStore
      .getState()
      .grantPoints([member.id], 200, "測試發放", "kwun-tong");

    expect(useAdminStore.getState().members[0].points).toBe(200);
    expect(useAdminStore.getState().transactions[0]).toMatchObject({
      memberName: "測試會員",
      points: 200,
      venue: "kwun-tong",
    });
  });

  it("supports both coupon kinds", () => {
    const base = {
      title: "測試券",
      discountAmount: 50,
      validFrom: "2026-08-01",
      validUntil: "2026-12-31",
      venueScope: "all" as const,
      recipientIds: [] as string[],
    };
    useAdminStore.getState().addCoupon({ ...base, kind: "cash" });
    useAdminStore.getState().addCoupon({
      ...base,
      kind: "threshold",
      minimumSpend: 300,
    });

    expect(
      useAdminStore
        .getState()
        .coupons.slice(0, 2)
        .map((item) => item.kind),
    ).toEqual(["threshold", "cash"]);
  });

  it("updates multiple members and keeps only one pinned video", () => {
    const memberIds = useAdminStore
      .getState()
      .members.slice(0, 2)
      .map((member) => member.id);

    useAdminStore
      .getState()
      .grantPoints(memberIds, 50, "批量測試", "all");

    const selectedMembers = useAdminStore
      .getState()
      .members.filter((member) => memberIds.includes(member.id));
    expect(selectedMembers.map((member) => member.points)).toEqual([
      1330, 810,
    ]);
    expect(
      useAdminStore
        .getState()
        .transactions.filter((item) => item.reason === "批量測試"),
    ).toHaveLength(2);

    useAdminStore.getState().toggleVideoPinned("vd-2");
    expect(
      useAdminStore.getState().videos.filter((video) => video.pinned),
    ).toHaveLength(1);
    expect(useAdminStore.getState().videos.find((video) => video.pinned)?.id).toBe(
      "vd-2",
    );
  });
});
