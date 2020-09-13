import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import styles from './author-list.module.css'

function AuthorList ({singleAuthor, items, title}) {
  const authorName = singleAuthor && singleAuthor.name
  return (
    <div className={styles.root}>
      <h2 className={styles.headline}>{title}</h2>
      <ul className={styles.list}>
        {singleAuthor &&
        <div>
          <li key={singleAuthor._key} className={styles.listItem}>
            <div>
              <div className={styles.avatar}>
                {singleAuthor && singleAuthor.image && singleAuthor.image.asset && (
                  <img
                    src={imageUrlFor(buildImageObj(singleAuthor.image))
                      .width(100)
                      .height(100)
                      .fit('crop')
                      .url()}
                    alt=''
                  />
                )}
              </div>
            </div>
            <div>
              <div>{authorName || <em>Missing name</em>}</div>
            </div>
          </li>
        </div>
        }

        {items && items.map(({author, _key}) => {
          const authorName = author && author.name
          return (
            <li key={_key} className={styles.listItem}>
              <div>
                <div className={styles.avatar}>
                  {author && author.image && author.image.asset && (
                    <img
                      src={imageUrlFor(buildImageObj(author.image))
                        .width(100)
                        .height(100)
                        .fit('crop')
                        .url()}
                      alt=''
                    />
                  )}
                </div>
              </div>
              <div>
                <div>{authorName || <em>Missing name</em>}</div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AuthorList
