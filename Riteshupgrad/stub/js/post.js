// Invisible Save Button by default
var btn = document.getElementById('save');
btn.style.display = "none";


function editcontent()
{
    // Makes the edit button invisible
    var edit_btn = document.getElementById('edit');
    edit_btn.style.display = "none";
    // Makes the save button visible
    var save_btn = document.getElementById('save');
    save_btn.style.display = "";
    // Puts a border to the content and heading and make them editable
    var para = document.getElementById('blogBody')
    para.style.border = "3px solid gray";
    para.setAttribute('contenteditable','true')

    var para = document.getElementById('blogtitlenew')
    para.style.border = "3px solid gray";
    para.setAttribute('contenteditable','true')

}

function saveContent()
{
    // Makes the save button invisible
    var edit_btn = document.getElementById('save');
    edit_btn.style.display = "none";
    // akes the edit button visible
    var save_btn = document.getElementById('edit');
    save_btn.style.display = "";
    // Removes the border of the content and heading and make them un-editable
    var para = document.getElementById('blogBody')
    para.style.border = "none";
    para.setAttribute('contenteditable','false')

    var para = document.getElementById('blogtitlenew')
    para.style.border = "none";
    para.setAttribute('contenteditable','false')
}

var likes= 0
function like()
{
    // Fetch the like button action
    var btn = document.getElementById('like');
    // When Clicked changes the innerHTML of the button
    btn.innerHTML = 'Liked!';
    // Shows the number of likes and change the innerTEXT to nuber of likes
    var content = document.getElementById('likescounter');
    likes = likes + 1
    content.innerHTML = `${likes} person likes this!`;
}

function Comment()
{
    // Fetch the new comment value
    var cmnt = document.getElementById('Commentadd').value;
    var holder= `<p class="newComment">${cmnt}</p>` // New coment template
    // Fetch the comment holder div
    var allComment = document.getElementById("CommentHolder");
    // Add the new comment to the comment holder
    allComment.innerHTML = holder + allComment.innerHTML;
    // Reset the value of the comment holder
    document.getElementById('Commentadd').value = "";
    
}
