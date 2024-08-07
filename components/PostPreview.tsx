import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'
import { tags } from 'sanity-plugin-tags'

import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'

import { firebase } from "../lib/firebase/firebaseClient";


export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, '_id'>) {

  const handleClick = () => {
    firebase.analytics().logEvent('opened_experience_modal', {
      slug: slug,
    });
  }

  return (
    <div onClick={() => handleClick()}>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline" >
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
      Posted on <Date dateString={date} />
      </div>
      {excerpt && <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>}
  </div>
  )
}
