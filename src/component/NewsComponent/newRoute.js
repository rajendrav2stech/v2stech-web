import React from 'react'
import { Route } from 'react-router'
import ReadMoreNews from './ReadMoreNews'
// import { newsData } from "../../data/newsData"

export const newRoute = (pathname) => (
    // newsData.map((urls, i) => (
    <Route exact path={pathname} component={ReadMoreNews} />
    // ))
)


