import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;