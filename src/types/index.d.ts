type ProductTagsType = 'ON_SALE' | 'NEW' | 'RECENTLY_UPDATED' | 'LEGACY' | 'KEYBOARD' | 'NUMPAD' | 'PANEL' | 'MOTORS' | 'NO_SCRIPTS' | 'MODELS_ONLY' | 'TOOL' | 'EQUIPMENT' | 'STATIONARY' | 'CFRAME' | 'MOUSE' | 'GUI'

type DataType = 'FAQ' | 'GUIDE' | 'PARTNER' | 'PRODUCT'

type SearchResult = FAQQestion | GuideVideo | PartnerSocial | FormattedRobloxProduct;

interface BaseData {
    id: string;
    type: DataType
}

interface RobloxProduct {
    /**
     * @todo document these properly
     */
    [key: string]: unknown;
    roblox_product_id: string;
    code: string;
    name: string;
    description: string;
    tags: ProductTagsType[];
    price_in_usd: string;
    price_in_robux: number;
    supporter_perk: boolean;
    viewable: boolean;
    purchasable: boolean;
    downloadable: boolean;
};

interface FormattedRobloxProduct extends BaseData {
    [key: string]: unknown;
    roblox_product_id: string;
    code: string;
    name: string;
    description: string;
    tags: ProductTagsType[];
    price_in_usd: string;
    price_in_robux: number;
    supporter_perk: boolean;
    viewable: boolean;
    purchasable: boolean;
    downloadable: boolean;
    type: 'PRODUCT'
}

interface FAQQestion extends BaseData {
    title: string;
    text: string;
    type: 'FAQ'
}

interface GuideVideo extends BaseData {
    title: string;
    video_id: string;
    type: 'GUIDE'
}

type PartnerSocialLinkType = 'discord' | 'roblox' | 'tiktok' | 'twitter' | 'instagram' | 'youtube' | 'website'

interface PartnerSocialLink {
    type: PartnerSocialLinkType;
    url: string;
}

interface PartnerSocial extends BaseData {
    name: string;
    owner_name: string;
    owner_id: string;
    description: string;
    banner_image_url: string;
    social_links: PartnerSocialLink[]
    type: 'PARTNER'
}

interface PriceMetadata {
    sale: number | undefined?
}

interface PriceData {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    metadata: PriceMetadata | undefined?
}