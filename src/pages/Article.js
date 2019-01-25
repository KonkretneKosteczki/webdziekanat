import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="home uk-width-2-3@m">
                <h4 className="uk-heading-line uk-text-bold"><span>Latest News</span></h4>
                <article className="uk-section uk-section-small uk-padding-remove-top">
                    <header>
                        <h2 className="uk-margin-remove-adjacent uk-text-bold uk-margin-small-bottom"><p
                            title="Fusce facilisis tempus magna ac dignissim." className="uk-link-reset">Fusce
                            facilisis tempus magna ac dignissim.</p></h2>
                        <p className="uk-article-meta">Written on March 23, 2019.  | <span
                            data-uk-icon="icon: future" className="uk-icon"><svg width="20" height="20"
                                                                                 viewBox="0 0 20 20"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 data-svg="future"><polyline
                            points="19 2 18 2 18 6 14 6 14 7 19 7 19 2"></polyline><path fill="none" stroke="#000"
                                                                                         stroke-width="1.1"
                                                                                         d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"></path><rect
                            x="9" y="4" width="1" height="7"></rect><path d="M13.018,14.197 L9.445,10.625" fill="none"
                                                                          stroke="#000" stroke-width="1.1"></path></svg></span> Takes
                            7 min reading.
                        </p>
                    </header>
                    <figure>
                        <img src="https://picsum.photos/800/300/?random=1"
                             data-src="https://picsum.photos/800/300/?random=1" width="800" height="300" alt="Alt text"
                             className="lazy" data-uk-img=""/>
                        <figcaption className="uk-padding-small uk-text-center uk-text-muted">Caption of the image
                        </figcaption>
                    </figure>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <hr/>
                </article>
            </div>
        );
    }
}

export default Footer;