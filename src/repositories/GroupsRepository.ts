import { IGroupsRepository } from '../interfaces/IGroupsRepository'

class GroupsRepository implements IGroupsRepository {
  baseUrl = ''
  token = ''

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async getGroups(uid: string, loggedInUid: string) {
    const response = await fetch(`${process.env.REACT_APP_GROUPS_BASE_URL}?members[all]=[${uid},${loggedInUid}]`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      }
    })

    return response.json()
  }
}

const groupsRepository = new GroupsRepository(process.env.REACT_APP_GROUPS_BASE_URL || '')
export default groupsRepository
