
import Link from 'next/link';
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter();

  return (
    // <button type="button" className="btn btn-primary" onClick={() => {router.push({pathname:'/price/[price]'})}}>Primary</button>
    <Link href="/قیمت-گوشی-موبایل">
      please click
    </Link>
  )
}
// import styles from '../styles.module.css'
// import Link from 'next/link'

// const Code = (p) => <code className={styles.inlineCode} {...p} />

// const Index = () => (
//   <div className={styles.container}>
//     <div className={styles.card}>
//       <h1>Rewrites with Next.js</h1>
//       <hr className={styles.hr} />
//       <p>
//         The links below are{' '}
//         <a href="https://nextjs.org/docs/api-reference/next.config.js/rewrites">
//           custom <Code>rewrites</Code>
//         </a>{' '}
//         that map an incoming request path to a different destination path.
//       </p>
//       <nav>
//         <ul className={styles.list}>
//           {/* <li>
//             <Link href="/about" as="/قیمت-محصول">
//               <a>Visit /قیمت-محصول</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/about" as="/قیمت-نوکیا">
//               <a>Visit /قیمت-نوکیا</a>
//             </Link>
//           </li> */}
//           <li>
//             <Link href="/first-post">
//               <a>Visit /post/first-post</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/second-post">
//               <a>Visit /post/second-post</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/blog/2020/first-post">
//               <a>Visit /blog/2020/first-post</a>
//             </Link>
//           </li>
//           <li>
//             <a href="/docs/page">Visit External URL</a>
//           </li>
//         </ul>
//       </nav>
//       <p>
//         Open <Code>next.config.js</Code> to learn more about the rewrites that
//         match the links above.
//       </p>
//       <hr className={styles.hr} />
//     </div>
//   </div>
// )

// export default Index