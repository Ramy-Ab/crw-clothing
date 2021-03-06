import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
                    {
                collections.map(({id,...othercollectionProps}) =>(
                    <CollectionPreview  key={id} {...othercollectionProps}/>
                ))
            }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections : selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview)


