
import React from 'react'
import type { Post } from 'lib/sanity.queries'
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'next-share';

import { firebase } from "../lib/firebase/firebaseClient";

  
const ShareButton: React.FC<Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug'>> = (props) => {
  const { title, coverImage, date, author, slug } = props;

  const handleShare = (platform: string) => {
      firebase.analytics().logEvent('share', {
          platform: platform,
          title: title,
          slug: slug,
      });
  };

  return (
      <div className="flex flex-row justify-center py-4">
          <h3 className="text-xl font-bold mr-4">Share: </h3>
          <div className="space-x-2">
              <FacebookShareButton
                  url={`https://jurnal.vnctkevin.com/posts/${slug}`}
                  onClick={() => handleShare('Facebook')}
              >
                  <FacebookIcon size={32} round />
              </FacebookShareButton>
              <RedditShareButton
                  url={`https://jurnal.vnctkevin.com/posts/${slug}`}
                  onClick={() => handleShare('Reddit')}
              >
                  <RedditIcon size={32} round />
              </RedditShareButton>
              <WhatsappShareButton
                  url={`https://jurnal.vnctkevin.com/posts/${slug}`}
                  onClick={() => handleShare('Whatsapp')}
              >
                  <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <LinkedinShareButton
                  url={`https://jurnal.vnctkevin.com/posts/${slug}`}
                  onClick={() => handleShare('LinkedIn')}
              >
                  <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <TwitterShareButton
                  url={`https://jurnal.vnctkevin.com/posts/${slug}`}
                  onClick={() => handleShare('Twitter')}
              >
                  <TwitterIcon size={32} round />
              </TwitterShareButton>
          </div>
      </div>
  );
};

export default ShareButton;