import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

//<Alert preview={preview} />
export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
