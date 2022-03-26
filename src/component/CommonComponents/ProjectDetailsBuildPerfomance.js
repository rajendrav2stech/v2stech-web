import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap';
import PopUP from './PopUp';
import { FREE_EVALUATIONS } from '../../actions/types';
import DetailsPageGetQuote from './DetailsPageGetQuote';

export default function ProjectDetailsBuildPerfomance(props) {
    const [isOpen, setIsOpen] = React.useState(false);
    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };
    return (
        <Fragment>
            {/* {
                data ? data.map((items, i) => {
                    return (
                        <div className={items.className} key={i}>
                            <Container>
                                <Row>
                                    {
                                        items.col ? items.col.map((col, ck) => {
                                            return (
                                                <Col lg={col.lg} md={col.md} sm={col.sm} xs={col.xs} key={ck}>
                                                    <div className={col.content.className}>
                                                        {
                                                            col.content.headingh3 ?
                                                                <h3>
                                                                    <strong>{col.content.headingh3.strong}</strong>
                                                                    <span>{col.content.headingh3.span}</span>
                                                                </h3>
                                                                : null
                                                        }
                                                        {
                                                            col.content.button ?
                                                                <Button variant={col.content.button.variant} onClick={showModal}>{col.content.button.value}</Button>
                                                                : null
                                                        }
                                                    </div>
                                                </Col>
                                            )
                                        }) : null
                                    }
                                </Row>
                            </Container>
                        </div>
                    )
                }) : null
            } */}
            <div className="model__content text-center">
                <div>
                    <div className="text-center btn-default">
                        <Button type="button" className="btn btn-varian" data-toggle="modal" data-target="#exampleModal1" onClick={showModal}>Request a Free Evaluation</Button></div>
                </div>
            </div>
            <PopUP
                shouldModalOpen={isOpen}
                closeModal={hideModal}
                title={'Request a Free Evaluation'}>
                <DetailsPageGetQuote formType={FREE_EVALUATIONS} closeModal={hideModal} />
            </PopUP>
        </Fragment>
    )
}
