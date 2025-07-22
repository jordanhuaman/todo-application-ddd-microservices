import { MEMBER_INVITATION_STATUS, MEMBER_ROLE } from "../../shared/domain/Todo.types";

export class TodoMember {
  private readonly id: number;
  private readonly groupId: string;
  private readonly memberId: string;
  private memberInvitationStatus: MEMBER_INVITATION_STATUS;
  private role: MEMBER_ROLE;

  constructor(params: {
    id: number,
    groupId: string,
    memberId: string,
    role?: MEMBER_ROLE
  }) {
    this.id = params.id;
    this.groupId = params.groupId;
    this.memberId = params.memberId;
    this.memberInvitationStatus = MEMBER_INVITATION_STATUS.PENDING;
    this.role = params.role || MEMBER_ROLE.MEMBER;
  }
  getId(): number {
    return this.id;
  }

  getGroupId(): string {
    return this.groupId;
  }

  getMemberId(): string {
    return this.memberId;
  }

  getMemberInvitationStatus(): MEMBER_INVITATION_STATUS {
    return this.memberInvitationStatus;
  }

  getRole(): MEMBER_ROLE {
    return this.role;
  }

}