let likeIcons = document.querySelectorAll('.bi.bi-heart');

likeIcons.forEach(likeIcon => {
    let postId = likeIcon.id;
    let liked = localStorage.getItem('true');
    
    if (liked === 'true') {
        likeIcon.classList.add('bi-heart-fill');
        likeIcon.classList.remove('bi-heart');
    }

    likeIcon.addEventListener('click', function() {
        this.classList.toggle('bi-heart');
        this.classList.toggle('bi-heart-fill');

        if (this.classList.contains('bi-heart-fill')) {
            localStorage.setItem(postId, 'true');
        } else {
            localStorage.setItem(postId, 'false');
        }
    });
});
