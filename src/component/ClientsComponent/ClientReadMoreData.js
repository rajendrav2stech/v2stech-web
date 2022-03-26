import React from 'react'

function ClientReadMoreData({ data }) {
    return (
        <div style={{height:'500px', overflow:'auto'}}>
            <p style={{margin:10}}>
                {data}
            </p>
        </div>

    )
}

export default ClientReadMoreData
