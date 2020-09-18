import React from 'react'

export default function PopularPost(props) {
    console.log(props);
    return (
        <div className='border border-green-800' style={{maxHeight:'13.5em'}}>
            <div className="flex">
                <div className='w-full flex items-center'>
                    <img style={{minHeight:'8em'}} src='https://assets1.biggerpockets.com/uploads/wordpress_blog_post/image/14286/lead_eviction-moratorium-tenant-financial-difficulty.jpg' alt="popular-post"/>
                </div>
                <div className=''>
                    <div className='flex'>
                        <h6 className='bg-blue-800 rounded text-white p-1 m-1px text-xs text-center'>Coronavirus Updates</h6>
                        <h6 className='text-xs'>Sep 10, 2020</h6>
                    </div>
                    <p className='p-2'>Kicking the Can: Will Delaying Evictions and foreclosures worsen a downturn?</p>
                    <div className="author-card flex flex-start m-5">
                        <img style={{borderRadius:'50%', height:'50px', width:'50px'}} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Gph501rvwMVoeSGyfOEuFgHaEK%26pid%3DApi&f=1' alt="avatar"/>
                        <p className='m-5 text-gray-600 underline'>By Obama</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
