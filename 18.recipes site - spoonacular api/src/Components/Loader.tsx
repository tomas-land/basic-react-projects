import React from 'react'
import { useGlobalContext } from '../context'
import ClipLoader from 'react-spinners/ClipLoader';

interface ILoading {
    loading: boolean;

}

const Loader = (props: ILoading) => {

    return (
        <ClipLoader className='loader' color={"green"} loading={props.loading} />
    )
}

export default Loader