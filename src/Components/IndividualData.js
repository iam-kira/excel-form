import React from 'react'

export const IndividualData = ({individualData,index}) => {
    return (
        <tr>
            <th>{index}</th>
            <th>{individualData.usn}</th>
            <th>{individualData.course}</th>
            {/* <th>{individualData.designation}</th>
            <th>{individualData.salary}</th> */}
        </tr>
    )
}
