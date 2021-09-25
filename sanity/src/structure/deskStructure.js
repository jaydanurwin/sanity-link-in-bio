import S from '@sanity/desk-tool/structure-builder'
import {MdSettings, MdInsertDriveFile} from 'react-icons/md'

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      S.listItem()
      .title('Links Page')
      .icon(MdInsertDriveFile)
      .child(
        S.editor()
          .id('linksPage')
          .schemaType('linksPage')
          .documentId('linksPage')
      ),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        listItem => !['siteSettings', 'linksPage'].includes(listItem.getId())
      )
    ])
