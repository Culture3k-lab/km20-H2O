import React from 'react';
import Image from 'next/image'

function ProductsPage() {
    return (
        <div className='productsPage'>
            <div className='productsPage_List'>
                {/* Item */}
                <div className='productsPage_Item productsPage_Item_Gray'>
                    <Image
                        className='productsPage_Item_Image '
                        src="/product_list/bottle_without_gas.png"
                        width={600}
                        height={600}
                        alt="Bottle without gas"
                    />
                    <div className='productsPage_Item_Info'>
                        <span className='productsPage_Item_Info_Title'>Вода негазированная</span>
                        <span className='productsPage_Item_Info_Description'>0.5 ML / 0.75 ML</span>
                    </div>
                </div>
                {/* Item */}
                <div className='productsPage_Item productsPage_Item_LightGray'>
                    <Image
                        className='productsPage_Item_Image '
                        src="/product_list/bottle_with_gas.png"
                        width={600}
                        height={600}
                        alt="Bottle with gas"
                    />
                    <div className='productsPage_Item_Info'>
                        <span className='productsPage_Item_Info_Title'>Вода с газом</span>
                        <span className='productsPage_Item_Info_Description'>0.5 ML / 0.75 ML</span>
                    </div>
                </div>
                {/* Item */}
                <div className='productsPage_Item productsPage_Item_Gray'>
                    <Image
                        className='productsPage_Item_Image '
                        src="/product_list/bottle_box.png"
                        width={600}
                        height={600}
                        alt="Bottle box"
                    />
                    <div className='productsPage_Item_Info'>
                        <span className='productsPage_Item_Info_Title'>KM H2O BOX</span>
                        <span className='productsPage_Item_Info_Description'>12 × 0.5 ML</span>
                    </div>
                </div>
                {/* Item */}
                <div className='productsPage_Item productsPage_Item_LightGray'>
                    <Image
                        className='productsPage_Item_Image '
                        src="/product_list/bottle_large.png"
                        width={600}
                        height={600}
                        alt="Bottle large"
                    />
                    <div className='productsPage_Item_Info'>
                        <span className='productsPage_Item_Info_Title'>Бутилированная вода</span>
                        <span className='productsPage_Item_Info_Description'>19 L</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsPage;