// our-domain.com/news
// import  React from  'react'; we don't need this import on next js
import  Link  from  'next/link';
import { Fragment } from "react";

function NewsPage(){
  return( 
    <Fragment>
    <h1>The News Page</h1>
    <ul>
      <li><Link href='/news/online-shoping-story'>online shoping</Link></li>
      <li>Somthing Else</li>

    </ul>
    </Fragment> 
  )
      

}


export  default NewsPage;
