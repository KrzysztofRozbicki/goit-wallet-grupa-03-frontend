import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { selectError } from '../../redux/session/selectors';
import { setError } from '../../redux/session/sessionSlice';

const useErrorToasts = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  if (error) {
    toast.error(error || 'An error occurred.');
    dispatch(setError(''));
  }
};

export default useErrorToasts;
