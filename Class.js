class Comment {
constructor (text) {
    this.text = text
    this.votesQty = 0
 }

upvote () {
    this.votesQty += 1
 }

static mergeComments(first, second) {
    return `${first} ${second}`
 }
}

const firstComment = new Comment ('First comment')
const secondComment = new Comment ( 'Second comment')
console.log(secondComment.text)
console.log(Comment.mergeComments('Some comment', 'Other comment'))



