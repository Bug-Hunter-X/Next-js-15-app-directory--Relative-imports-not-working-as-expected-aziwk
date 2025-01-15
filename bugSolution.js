```javascript
// app/components/layout.js
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
      {children}
    </div>
  );
}
```
```javascript
// app/page.js
import Layout from './components/layout';

export default function Home() {
  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout>
  );
}
```