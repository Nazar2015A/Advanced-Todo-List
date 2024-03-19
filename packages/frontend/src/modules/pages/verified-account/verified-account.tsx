import React, { useEffect } from 'react';
import { toast } from 'sonner';
import { useMyNavigation } from '../../common/hooks/useMyNavigation';
import { APP_KEYS } from '../../common/consts';

export const VerifiedAccountPage = () => {
  const { navigate } = useMyNavigation(APP_KEYS.ROUTER_KEYS.HOME);
  useEffect(() => {
    toast.success('Your account was successfuly verified!');
    navigate();
  }, []);

  return <div>Your account was successfuly verified!</div>;
};
