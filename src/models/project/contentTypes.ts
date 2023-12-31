/**
 * Generated by '@kontent-ai/model-generator@6.5.0'
 */
export const contentTypes = {
    /**
     * Landing page
     */
    landing_page: {
        codename: 'landing_page',
        id: 'aca5f188-3d45-48fb-92c4-3c967739017c',
        externalId: undefined,
        name: 'Landing page',
        elements: {
            /**
             * Body (rich_text)
             */
            body: {
                codename: 'body',
                id: '8a470b69-63b7-4fd5-9418-f00cfd2189a2',
                externalId: undefined,
                name: 'Body',
                required: true,
                type: 'rich_text'
            },

            /**
             * Image (asset)
             */
            image: {
                codename: 'image',
                id: '87e4d8ee-9a0c-431c-8ea5-51e3a461102a',
                externalId: undefined,
                name: 'Image',
                required: false,
                type: 'asset'
            },

            /**
             * Title (text)
             */
            title: {
                codename: 'title',
                id: '23d8efc5-9ff5-48e8-a388-8656086a0edd',
                externalId: undefined,
                name: 'Title',
                required: true,
                type: 'text'
            }
        }
    },

    /**
     * Page
     */
    page: {
        codename: 'page',
        id: '732d1b1f-4e1d-4a75-8df7-4a50c6f567a8',
        externalId: undefined,
        name: 'Page',
        elements: {
            /**
             * Content (modular_content)
             */
            content: {
                codename: 'content',
                id: '0acd23b0-e4b6-4349-b53b-3318f9d24365',
                externalId: undefined,
                name: 'Content',
                required: false,
                type: 'modular_content'
            },

            /**
             * Show in navigation (multiple_choice)
             */
            show_in_navigation: {
                codename: 'show_in_navigation',
                id: '612eddb8-ddb8-4583-a944-26b9122c2ce5',
                externalId: undefined,
                name: 'Show in navigation',
                required: false,
                type: 'multiple_choice',
                options: {
                    yes: {
                        name: 'Yes',
                        id: '4f3ae917-b38e-46f1-a528-2eb84e64d336',
                        codename: 'yes',
                        externalId: undefined
                    },
                    no: {
                        name: 'No',
                        id: 'd4c4e627-75ef-4ae4-b90c-0bf6b68de268',
                        codename: 'no',
                        externalId: undefined
                    }
                }
            },

            /**
             * Subpages (subpages)
             */
            subpages: {
                codename: 'subpages',
                id: '041a1c4a-975e-48c9-bd2e-8492a76173bd',
                externalId: undefined,
                name: 'Subpages',
                required: false,
                type: 'subpages'
            },

            /**
             * Title (text)
             */
            title: {
                codename: 'title',
                id: '8be801b1-2179-4346-a0e3-7c21bfc14ce5',
                externalId: undefined,
                name: 'Title',
                required: false,
                type: 'text'
            },

            /**
             * URL (url_slug)
             */
            url: {
                codename: 'url',
                id: '25fd6caa-b7bd-4df0-885a-8ad0adef2b62',
                externalId: undefined,
                name: 'URL',
                required: false,
                type: 'url_slug'
            }
        }
    },

    /**
     * Web spotlight root
     */
    web_spotlight_root: {
        codename: 'web_spotlight_root',
        id: 'bed6824b-55e7-493f-99be-2babc3d21798',
        externalId: undefined,
        name: 'Web spotlight root',
        elements: {
            /**
             * Content (modular_content)
             */
            content: {
                codename: 'content',
                id: '66da13d0-bc60-4615-a4bb-88a7e1b6e9db',
                externalId: undefined,
                name: 'Content',
                required: false,
                type: 'modular_content'
            },

            /**
             * Subpages (subpages)
             */
            subpages: {
                codename: 'subpages',
                id: 'af81d439-6115-42e5-a569-43043fbcf679',
                externalId: undefined,
                name: 'Subpages',
                required: false,
                type: 'subpages'
            },

            /**
             * Title (text)
             */
            title: {
                codename: 'title',
                id: '2b52a8c3-48a6-4ed9-a586-bb2b1524ab72',
                externalId: undefined,
                name: 'Title',
                required: false,
                type: 'text'
            }
        }
    }
} as const;
