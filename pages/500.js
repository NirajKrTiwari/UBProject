// pages/500.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom500() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page after a delay (e.g., 3 seconds)
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, 3000000);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div>
      <p>Internal Server Error. Redirecting to the home page...</p>
      {/* You can include a loading spinner or other UI elements here */}
    </div>
  );
}
