import React from 'react'

const PostLayout = ({_id,thumbnail,title,price,quantity,description,deleteProduct}) => {
    return (    
        <div key={_id} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={thumbnail} alt="blog" />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">{title}</h1>
                    <p className="leading-relaxed mb-3">{description}</p>
                    <div className="flex items-center flex-wrap ">
                        <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                            <button className='pl-2'onClick={()=>deleteProduct(_id)}>Delete</button>
                        </a>
                        <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                            <h1 className='title-font text-lg font-medium text-white '>Price : {price}</h1>
                        </span>
                        <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                            <h2>Quantity : {quantity}</h2>
                        </span>
                    </div>
            
                </div>
            </div>

        </div>
    )
}

export default PostLayout