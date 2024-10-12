import React from 'react'

let arrCard = [
    {
        icon: "bi bi-collection",
        name: "Fresh new layout",
        desc: "With Bootstrap 5, we've created a fresh new layout for this template!",
    },
    {
        icon: "bi bi-cloud-download",
        name: "Free to download",
        desc: "As always, Start Bootstrap has a powerful collectin of free templates.",
    },
    {
        icon: "bi bi-card-heading",
        name: "Jumbotron hero header",
        desc: "The heroic part of this template is the jumbotron hero header!",
    },
    
    {
        icon: "bi bi-bootstrap",
        name: "Feature boxes",
        desc: "We've created some custom feature boxes using Bootstrap icons!",
    },
    {
        icon: "bi bi-code",
        name: "Simple clean code",
        desc: "We keep our dependencies up to date and squash bugs as they come!",
    },
    {
        icon: "bi bi-patch-check",
        name: "A name you trust",
        desc: "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
    },

]
function renderCard() {
    return arrCard.map((item, index) => {
        return <div className="section_item rounded-md " key={index} >  <div className="card border-0" >
            <div className="card_body text-center p-12 pt-0">
                <div className="card_item bg-[rgb(13, 110, 253)]">
                    <div className="card_icon h-[4rem] w-[4rem] text-[2rem] text-center inline-flex rounded-[0.5rem] justify-center">
                        <i className={item.icon}></i>
                    </div>
                    <h2 className='text-[1.5rem] font-bold mb-2'>{item.name}</h2>
                    <p>{item.desc}</p>
                </div>
            </div>
        </div>
        </div>
    })
}
const Card = () => {
    return (
        <div className="section_content grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-12 gap-12 ">
            {renderCard()}
        </div>

    )
}

export default Card