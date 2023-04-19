import { useEffect } from 'react';

const News = ({newsData}) => {

    useEffect(() => {
        console.log(newsData)
    }, [newsData])

return (
    <div>
<img src={newsData.image.url}/> 
<p>{newsData.title}</p>
</div>
            )
            }

export default News;