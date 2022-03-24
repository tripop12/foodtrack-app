import { useRouter } from 'next/router'

const DetailPage = ()=>{
    const router = useRouter();
    const {slug} = router.query
    return <div>DetailPage of {slug}!</div>
}

export default DetailPage