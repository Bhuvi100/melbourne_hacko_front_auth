import React, {useEffect, useState} from 'react'
import Layout from '@components/layout'
import Table, {TableCell, TableRow} from '@components/table'
import api from '@/util/api'
import {isLoggedIn} from '@/util/auth'
import redirectTo from '@/util/redirectTo'
import withAuth from '@components/withAuth'
import router from "next/router";

const Home = ({user}) => {
    const [waiting, setWaiting] = useState(true)

    useEffect(() => {
        // api().get('/api/tickets').then(response => setTickets(response.data))

        api().post('/api/waiting/create').then(response => {
            let data = response.data

            if (data.match_found) {
                router.push('/match')
            } else {
                console.log('App\\\\Events\\\\MatchFoundEvent')
                console.log('waitinglist.' + data.waiting_list.id)
                Echo.channel('waitinglist.' + data.waiting_list.id)
                    .listen('MatchFoundEvent', (match) => {
                        alert('Match Found')
                        console.log('YESS')
                    })
            }
        })

    }, [])

    return (
        <Layout>
      MATCHING
        </Layout>
    )
}

export default withAuth(Home)
