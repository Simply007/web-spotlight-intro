import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@6.5.0'
 *
 * Page
 * Id: 732d1b1f-4e1d-4a75-8df7-4a50c6f567a8
 * Codename: page
 */
export type Page = IContentItem<{
    /**
     * Content (modular_content)
     * Required: false
     * Id: 0acd23b0-e4b6-4349-b53b-3318f9d24365
     * Codename: content
     */
    content: Elements.LinkedItemsElement<IContentItem>;

    /**
     * Show in navigation (multiple_choice)
     * Required: false
     * Id: 612eddb8-ddb8-4583-a944-26b9122c2ce5
     * Codename: show_in_navigation
     */
    show_in_navigation: Elements.MultipleChoiceElement;

    /**
     * Subpages (subpages)
     * Required: false
     * Id: 041a1c4a-975e-48c9-bd2e-8492a76173bd
     * Codename: subpages
     */
    subpages: Elements.LinkedItemsElement<IContentItem>;

    /**
     * Title (text)
     * Required: false
     * Id: 8be801b1-2179-4346-a0e3-7c21bfc14ce5
     * Codename: title
     */
    title: Elements.TextElement;

    /**
     * URL (url_slug)
     * Required: false
     * Id: 25fd6caa-b7bd-4df0-885a-8ad0adef2b62
     * Codename: url
     */
    url: Elements.UrlSlugElement;
}>;
