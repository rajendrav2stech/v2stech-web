import React from 'react'
// import { AJAX, CSS, DJANGO, HTML, JQUERY, MYSQL, PYTHON, RESTAPI, WTCINTRO } from "../../assets/images/Index";
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl';
// import AnchorImage from './AnchorImage';
import HeadingComponentsH5 from './HeadingComponentsH5';
import HeadingComponentsH6 from './HeadingComponentsH6';

import ImageComponent from './ImageComponent';
const ProjectCard = ({ sub_category_item, className }) => {
    return (
        <div className={className}>
            <div className={`portfolio`}>
                <div className="pad">
                    <div className="protfolio_thumbnill">
                        <a href={sub_category_item.project_url} target="_blank">{sub_category_item.banner_image ? <ImageComponent image={localDomain + sub_category_item.banner_image} webpImage={localDomain + sub_category_item.banner_image_webp} title={sub_category_item.title} /> : null}</a>
                    </div>
                    <div className="pad_2">
                        <a href={sub_category_item.project_url} target="_blank">
                            {sub_category_item.sub_title ? <HeadingComponentsH6 headingH6={sub_category_item.sub_title} /> : null}
                            {sub_category_item.title ? <HeadingComponentsH5 headingH5={sub_category_item.title} /> : null}
                            <ul>
                                {
                                    sub_category_item.technology_images ? sub_category_item.technology_images.map((items, li) => {
                                        return (
                                            <li key={li}>
                                                <ImageComponent image={localDomain + items.image_icon} webpImage={localDomain + items.banner_image_webp} title={items.title} />
                                            </li>
                                        )
                                    }) : null
                                }
                            </ul>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard