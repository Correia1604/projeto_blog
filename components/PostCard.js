import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Nav.module.css';

export default function PostCard({ post }) {
    const [publishing, setPublishing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();

    // Publish post
    const publishPost = async (postId) => {
        // change publishing state
        setPublishing(true);

        try {
            // Update post
            await fetch('/api/posts', {
                method: 'PUT',
                body: postId,
            });

            // reset the publishing state
            setPublishing(false);

            // reload the page
            return router.push(router.asPath);
        } catch (error) {
            // Stop publishing state
            return setPublishing(false);
        }
    };
    // Delete post
    const deletePost = async (postId) => {
        //change deleting state
        setDeleting(true);

        try {
            // Delete post
            await fetch('/api/posts', {
                method: 'DELETE',
                body: postId,
            });

            // reset the deleting state
            setDeleting(false);

            // reload the page
            return router.push(router.asPath);
        } catch (error) {
            // stop deleting state
            return setDeleting(false);
        }
    };
    return (
        <>
            <li>
                <h3 className={styles.postitle}>{post.title}</h3>
                <p className={styles.postext}>{post.content}</p>
                <small>{new Date(post.createdAt).toLocaleDateString()}</small>
                <br />
                {!post.published ? (
                    <button type="button" onClick={() => publishPost(post._id)} className={styles.button1}>
                        {publishing ? 'Publishing' : 'Publish'}
                    </button>
                ) : null}
                <button type="button" onClick={() => deletePost(post['_id'])} className={styles.button1}>
                    {deleting ? 'Deleting' : 'Delete'}
                </button>
            </li>
        </>
    );
}