import React, { useEffect, useState } from 'react';
import forum from '../../assets/forum.jpg'
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const CommunityPage = () => {

    const [contents, setContents] = useState([]);
    const [like, setLike] = useState(false);
    const [showDetails, setShowDetails] = useState('');


    useEffect(() => {
        fetch('community.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setContents(data);
            })
    }, []);

    const handleLike = id => {
        setShowDetails(prev => !prev ? id : "");
        setLike(!like)


    }

    return (
        <div className='mb-16'>
            <div className='lg:w-[50%] mx-auto'>
                <img src={forum} className='w-full' alt="forum" />
            </div>
            <h5 className='font-bold text-center text-2xl md:text-4xl lg:text-5xl my-5 px-5'>
                Community for Engaging Conversations
            </h5>
            <div className='m-10 lg:w-3/4 mx-auto px-4'>
                {
                    contents.map(content =>
                        <div key={content._id} className='w-full my-10 bg-zinc-200 border-2 rounded-lg p-5 lg:px-16 lg:py-10'>
                            <div className='flex flex-col gap-5 md:flex-row items-center justify-between'>
                                <div className='flex gap-5 items-center'>
                                    <div>
                                        <img src={content.userPhoto} alt=""
                                            className='w-16 h-16 rounded-full' />
                                    </div>
                                    <div>
                                        <p className='font-semibold text-lg'>
                                            {content.username}
                                        </p>
                                        <p className='text-sm'>
                                            {content.email}
                                        </p>

                                    </div>
                                </div>



                                <p className='text-sm'>
                                    {content.createdAt}
                                </p>
                            </div>

                            <div className='my-5'>
                                <img src={content.postImage} className='w-96 mx-auto rounded-2xl' alt="" />

                                <h5 className='font-bold text-2xl text-center my-10'>
                                    {content.discussionTitle}
                                </h5>

                                <p>
                                    {content.content}
                                </p>

                            </div>

                            {/* <button onClick={() => handleLike(content._id)}>
                                {
                                    showDetails === content._id && like ? <FaHeart className='text-red-600 text-2xl' /> : <FaRegHeart className='text-2xl' />
                                }
                            </button> */}

                        </div>)
                }
            </div>
        </div>
    );
};

export default CommunityPage;