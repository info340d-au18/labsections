// Loads the members page
// Takes in allcode (JSON.parse()ed data)
function loadMembersPage(allcode) {
    // First, give all the category selectors functionality
    giveCategorySelectorsFunctionality();

    // Take in membersList div to put data into later
    var memberListDiv = $("#memberList");
    var adviserListDiv = $("#adviserList");

    // For every team member listed in allcode...                   // for of
    for (var i = 0; i < allcode.members.length; i++) {
        // Grab their data                                          // let    
        var person = allcode.members[i];
        var name = person.name;
        var description = person.description;
        var role = person.role;
        var linkedin = person.linkedin;
        var position = person.position;
        var size = person.size;
        var picture = person.picture;
        var subtitle = person.subtitle;                             // destructuring



        // Set up their data into a hover box
        var nameAndParagraph = "<h3>" + name + "</h3>";
        if (subtitle != undefined) {                                                    // true/false
            nameAndParagraph = nameAndParagraph + "<h4>" + subtitle + "</h4>";
        } else {
            nameAndParagraph = nameAndParagraph + "<h4>Member</h4>";
        }
        nameAndParagraph = nameAndParagraph + "<br /><p>" + description + "</p>";
        var linkedInIcon = "";
        if (linkedin != undefined) {
            linkedInIcon = "<a href='" + linkedin + "'><img src='http://2017.igem.org/wiki/images/7/79/T--Washington--LinkedinIcon.png' alt='LinkedIn' style='height: 50px; width: auto; padding: 1px'/></a>";
        }

        // Add linkedin icon if there is one
        nameAndParagraph = nameAndParagraph + linkedInIcon;

        // Set up all the hover data
        var pictureAndData = $("<div></div>")
            .addClass("rounded-circle")
            .addClass("picture")
            .attr({
                "data-trigger": "hover click",
                "data-container": "body",
                "data-toggle": "popover",
                "data-placement": "left", // PLACEMENT of hover box. Specifically chosen left rather than top or bottom
                "data-html": "true",
                "data-content": nameAndParagraph,
                "style": "background:url('" + picture + "'); background-position: " + position + "; background-size: " + size
            });

        // Set up border of each person
        var border = $("<div></div>")
            .addClass(role)
            .addClass("memberFinder")
            .addClass("rounded-circle")
            .attr({
                "style": "margin: auto"
            });
        border.append(pictureAndData);

        // Put each person into a section
        var col = $("<div></div>")
            .addClass("col")
            .attr({
                "style": "margin: 3px"
            });

        // Put it all into memberList div
        col.append(border);
        if (role == "adviser") {
            adviserListDiv.append(col);
        } else {
            memberListDiv.append(col);
        }
    }
}