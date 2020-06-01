import { useWillMount } from '@rockpack/ussr';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUser } from './actions';
import { User } from '../../types/Users';

export const useUsers = (): User[] => {
  const dispatch = useDispatch();
  const users = useSelector<{ users: User[] }, User[]>(state => state.users);

  useWillMount((resolver) => dispatch(fetchUsers({ resolver })));

  return users;
};

interface UseUserApiInterface {
  deleteUser: (id: number) => void;
}

export const useUsersApi = (): UseUserApiInterface => {
  const dispatch = useDispatch();
  return {
    deleteUser: (id: number): void => {
      dispatch(deleteUser({ id }));
    }
  };
};