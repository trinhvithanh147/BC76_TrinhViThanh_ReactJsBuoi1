import React from 'react'
const Section = () => {
    return (
        <div className='pt-6 section overflow-hidden'>
            <div className="container lg:px-12">
                <div className="section_content grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-12 gap-12">
                    <div className="section_item rounded-md">
                        <div className="card border-0">
                            <div className="card_body text-center p-12 pt-0">
                                <div className="card_item bg-[rgb(13, 110, 253)]">
                                    <div className="card_icon h-[4rem] w-[4rem] text-[2rem] text-center inline-flex rounded-[0.5rem] justify-center">
                                        <i className="bi bi-collection"></i>
                                    </div>
                                    <h2 className='text-[1.5rem] font-bold mb-2'>Fresh new layout</h2>
                                    <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section_item rounded-md">
                        <div className="card border-0">
                            <div className="card_body text-center p-12 pt-0">
                                <div className="card_item bg-[rgb(13, 110, 253)]">
                                    <div className="card_icon h-[4rem] w-[4rem] text-[2rem] text-center inline-flex rounded-[0.5rem] justify-center">
                                        <i className="bi bi-cloud-download"></i>
                                    </div>
                                    <h2 className='text-[1.5rem] font-bold mb-2'>Free to download</h2>
                                    <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div className="section_item rounded-md">
                        <div className="card border-0">
                            <div className="card_body text-center p-12 pt-0">
                                <div className="card_item bg-[rgb(13, 110, 253)]">
                                    <div className="card_icon h-[4rem] w-[4rem] text-[2rem] text-center inline-flex rounded-[0.5rem] justify-center">
                                        <i className="bi bi-card-heading"></i>
                                    </div>
                                    <h2 className='text-[1.5rem] font-bold mb-2'>Jumbotron hero header</h2>
                                    <p>The heroic part of this template is the jumbotron hero header!</p>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div className="section_item rounded-md">
                        <div className="card border-0">
                            <div className="card_body text-center p-12 pt-0">
                                <div className="card_item bg-[rgb(13, 110, 253)]">
                                    <div className="card_icon h-[4rem] w-[4rem] text-[2rem] text-center inline-flex rounded-[0.5rem] justify-center">
                                        <i className="bi bi-bootstrap"></i>
                                    </div>
                                    <h2 className='text-[1.5rem] font-bold mb-2'>Feature boxes</h2>
                                    <p>We've created some custom feature boxes using Bootstrap icons!</p>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div className="section_item rounded-md">
                        <div className="card border-0">
                            <div className="card_body text-center p-12 pt-0">
                                <div className="card_item bg-[rgb(13, 110, 253)]">
                                    <div className="card_icon h-[4rem] w-[4rem] text-[2rem] text-center inline-flex rounded-[0.5rem] justify-center">
                                        <i className="bi bi-code"></i>
                                    </div>
                                    <h2 className='text-[1.5rem] font-bold mb-2'>Simple clean code</h2>
                                    <p>We keep our dependencies up to date and squash bugs as they come!</p>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div className="section_item rounded-md">
                        <div className="card border-0">
                            <div className="card_body text-center p-12 pt-0">
                                <div className="card_item bg-[rgb(13, 110, 253)]">
                                    <div className="card_icon h-[4rem] w-[4rem] text-[2rem] text-center inline-flex rounded-[0.5rem] justify-center">
                                        <i className="bi bi-patch-check"></i>
                                    </div>
                                    <h2 className='text-[1.5rem] font-bold mb-2'>A name you trust</h2>
                                    <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                                </div>
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
        </div>
    )
}

export default Section