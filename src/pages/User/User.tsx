import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/use-app-selector'
import useHttp from '../../hooks/use-http'
import { Group } from '../../types/db-types'

const User = () => {
  const { isLoading, error, sendRequest: fetchGroupsRequest } = useHttp()
  const { userId } = useParams()
  const user = useAppSelector((state) => state.user)
  /* const response = await fetch(`${process.env.REACT_APP_GROUPS_BASE_URL}?members[all]=[${uid},${loggedInUid}]`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    }
  }) */
  useEffect(() => {
    // const groupsList: Group[] | [] = []

    const populateGroups = (groups: any) => {
      console.log(groups)
      // groups.forEach((group) => groupsList.push(group))
    }

    fetchGroupsRequest(
      {
        url: `${process.env.REACT_APP_GROUPS_BASE_URL}?members[all]=[${userId},${user.id}]`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      },
      populateGroups
    )
  }, [fetchGroupsRequest, user.id, user.token, userId])

  return (
    <h1>A User</h1>
  )
}

export default User
