import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, Container, Row, Col } from 'reactstrap';
import './About.css';

export class About extends Component {
    static displayName = About.name;

    render() {
        return (
            <Container className="text-center">
                <h1 className="margin-top"><i>Sisters &#8226; Best Friends &#8226; Concierges &#8226; Partners</i></h1>
                <Row>
                    <Col xs="8"className="text-left font-properties">
                        <p>
                            Thank you and Mahalo for visiting our website, it means a great deal to us. We'd like to share a little about WhyNotVacay and how we could help you in making your vacation a great and memorable one.
                            <br /><br />
                            We are 3 sisters/best friends(last time we checked) all born and raised in Hawaii. Our little sister resides on the beautiful Whidbey Island in Washington where we often visit. We put a cap on our first Sister Vacation at the end of 2019. Not only was it AWESOME, it's also where WhyNotVacay was born.
                            <br /><br />
                            WhyNotVacay is a Concierge Travel Service...with a twist. It was an idea that grew over the duration of planning our trip. Our almost nightly phone chats turned from simply expressing how <i>excited</i> we were to 'meetings' where we strategized and decided on how to implement new activies and ideas into our trip. It turned into a 2nd job; we now had eadlines and began referring to ourselves as Partners(which made us feel important).
                            <br /><br />
                            Some of the things we did were:
                            <br /><br />
                            <b>A Detailed Itinerary</b>
                            <ul>
                                <li>This game us a reason to have an "Unveiling of the Itinerary Ceremony", and everyone knows that ceremonies require champagne!</li>
                                <li>To keep us on track so we didn't miss or forget the things we planned to do.</li>
                            </ul>
                            <br />
                            <b>Personalized Lanyards(in case we forgot our name slaong the way - you never know)</b>
                            <br /><br />
                            <b>Memory Albums</b>
                            <ul>
                                <li>An album to journal about the different placess we visited</li>
                                <li>Best for the future when we do lose our memory</li>
                            </ul>
                            <br />
                            <b>Questionnaire</b>
                            <ul>
                                <li>This prompted deep thoughts, and reveleaded deep feelings and emotions we could share with each other</li>
                                <li>Note: we did this in the privacy of our accomodations, although we felt a padded room might have been safer</li>
                            </ul>
                            <br />
                            As our vacation was winding down, we all went into a sublte 'Mourning', (for one, it was more like a Deep Dpression! and we're not sure if she's still not out of it) we started wondering, "you know, maybe others would enjoy this type of vacation, with a twist", Why not?
                            <br /><br />
                            So, if you are:
                            <ul>
                                <li>Traveling to Whidbey Island or surrounding areas</li>
                                <li>Family/Best Friends/Both/Even enemies with a promise you'll reconcile by the end of the trip</li>
                                <li>Open to just wanting to laugh, a lot of silliness, and great bonding opportunities</li>
                                <li>A Dog Lover! (Honestly, this has nothing to do with anything, we just thought we'd throw that in there)</li>
                            </ul>
                            <br />
                            Then we'd like to get to know you and hopefully play a part in making your vacation as AWESOME as ours was. Our thought is, if we can assist you before your vacation begins, you won't be wasting time during it trying to figure out what to do or where to go.
                            <br /><br />
                            Remember, it doesn't matter where you're going, it's who you're going there with...
                            <br /><br />
                            <p align="right">With much Aloha,
                            <br />
                            WhyNotVacay</p>
                        </p>
                    </Col>
                    <Col className="columnRight">
                        <Card style={{ width: '18rem' }}>
                            <CardImg variant="top" src="../img/ferry_dock.png" alt="Lyn" />
                            <CardBody>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </CardText>
                            </CardBody>
                        </Card>
                        <br />
                        <Card style={{ width: '18rem' }}>
                            <CardImg variant="top" src="../img/ferry_dock.png" alt="Ana" />
                            <CardBody>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </CardText>
                            </CardBody>
                        </Card>
                        <br />
                        <Card style={{ width: '18rem' }}>
                            <CardImg variant="top" src="../img/ferry_dock.png" alt="Keri" />
                            <CardBody>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}