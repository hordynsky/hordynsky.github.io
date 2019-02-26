import UpdateItem from '../components/UpdateItem'
// import {withRouter} from 'next/router'

// METHOD #2

const Sell = ({query}) => (
    <div>
        <UpdateItem id={query.id}/>
    </div>
)

export default Sell;

// METHOD #1
// TRYING TO DO IT WITH "withRouter from 'next/router/, but you forgot to add <Component {...pageProps}/> props itself on _app.js"
// ALSO, YOU RETURNED  return pageProps; AND NOT  return {pageProps}; - that was a problem

// const Sell = ({router}) => (
//     <div>
//         <UpdateItem id={router.query.id}/>
//     </div>
// )

// export default withRouter(Sell);
