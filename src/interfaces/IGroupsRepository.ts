type Group = {
  id: string,
  title: string
  description: string
  members: string[]
}

type GetGroupsResponse = {
  groups: Group[]
  status: string
}

export interface IGroupsRepository {
  baseUrl: string
  token: string
  getGroups: (uid: string, loggedInUid: string) => Promise<GetGroupsResponse>
}
