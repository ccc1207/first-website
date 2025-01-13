$(document).ready(function() {
    let savedItems = [];

    // Function to save an item for later
    $('.save-later-btn').click(function() {
        const itemName = $(this).data('item');
        if (!savedItems.includes(itemName)) {
            savedItems.push(itemName);
            alert('You have saved ' + savedItems.length + ' items for later.');
        } else {
            alert(itemName + ' is already saved.');
        }

        // Save the list to local storage (so it persists across pages)
        localStorage.setItem('savedItems', JSON.stringify(savedItems));
    });

    // Retrieve saved items from local storage on page load
    if (localStorage.getItem('savedItems')) {
        savedItems = JSON.parse(localStorage.getItem('savedItems'));
    }
});

$(document).ready(function() {
    let likeCount = 0;

    // Like button functionality
    $('.like-btn').click(function() {
        likeCount++;
        alert('You liked this ' + likeCount + ' time(s).');
    });
});

$(document).ready(function() {
    $('#comment-form').submit(function(event) {
        event.preventDefault();

        const name = $('#name').val();
        const comment = $('#comment').val();

        if (name && comment) {
            $('#comment-list').append('<p><strong>' + name + ':</strong> ' + comment + '</p>');
            $('#name').val('');
            $('#comment').val('');
        } else {
            alert('Please enter both your name and comment.');
        }
    });
});

$(document).ready(function() {
    $('#toggle-btn').click(function() {
        $('#toggle-section').toggle();
    });
});

$(document).ready(function() {
    $('#animated-element').click(function() {
        $(this).animate({ left: '+=50px' }, 500)
               .animate({ left: '-=50px' }, 500)
               .fadeOut(500)
               .fadeIn(500);
    });
});

$(document).ready(function () {
    $('#toggle-btn').click(function () {
      $('#toggle-section').slideToggle(500); // Smooth toggle
    });
  });

  $(document).ready(function () {
    $('a[href="#top"]').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate(
        {
          scrollTop: 0,
        },
        800 // Duration of animation in milliseconds
      );
    });
  });

  $(document).ready(function () {
    $('.image-gallery img').hide().fadeIn(2000); // Fades in the image
  });

  AOS.init();

  $(document).ready(function () {
    $('nav ul li').hover(
        function () {
            $(this).find('.dropdown').stop(true, true).slideDown(300); // Show dropdown
        },
        function () {
            $(this).find('.dropdown').stop(true, true).slideUp(300); // Hide dropdown
        }
    );


  $// Keep dropdown visible when hovering over it
  $('nav ul li .dropdown').hover(
    function () {
        $(this).stop(true, true).show(); // Ensure it stays visible
    },
    function () {
        $(this).slideUp(300); // Hide on mouse leave
    }
);
});

document.getElementById("toggle-button").addEventListener("click", function () {
  const section = document.getElementById("toggle-section");
  const button = this;

  // Toggle the visibility of the section
  if (section.classList.contains("hidden")) {
    section.classList.remove("hidden");
    button.textContent = "Hide Sections";
  } else {
    section.classList.add("hidden");
    button.textContent = "Show Sections";
  }
});

document.querySelectorAll('.like-button').forEach(button => {
  button.addEventListener('click', () => {
    alert('You liked this story!');
  });
});

document.querySelectorAll('.dislike-button').forEach(button => {
  button.addEventListener('click', () => {
    alert('You disliked this story.');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Handle comment form submission
  document.getElementById('commentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    const comment = document.querySelector('textarea[name="comment"]').value;
    alert(`Thank you for your comment: "${comment}"`);
    // Optionally send the comment to a server here
  });

  // Handle newsletter form submission
  document.getElementById('newsletterForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    const email = document.querySelector('input[name="email"]').value;
    alert(`Thank you for subscribing with: ${email}`);
    // Optionally send the email to a server here
  });
});

