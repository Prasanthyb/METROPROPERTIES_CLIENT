 const ProjectList=[
    {
        img:"images/projects/Project01.png" ,
        id:"1",
        suscription:"Free",
        title:"Indroduction",
        level:"BEGINNER",
        type:"Animation",
        yearlevel:"1-4",
        subjectmatter:"Language"


    },
    {
        img:"images/projects/Project02.png" ,
        id:"2",
        suscription:"Free",
        title:"My Birthday",
        level:"BEGINNER",
        type:"Game",
        yearlevel:"5-6",
        subjectmatter:"Music"

    },
    {
        img:"images/projects/Project03.png" ,
        id:"3",
        suscription:"Premium",
        title:"10 Block Challenge",
        level:"INTERMEDIATE",
        type:"Animation",
        yearlevel:"7-8",
        subjectmatter:"Maths"

    },
    {
        img:"images/projects/Project04.png" ,
        id:"4",
        suscription:"Premium",
        title:"Build a Band",
        level:"INTERMEDIATE",
        type:"Game",
        yearlevel:"7-8",
        subjectmatter:"Music"

    },
    {
        img:"images/projects/Project05.png" ,
        id:"5",
        suscription:"Premium",
        title:"The Bear and the Monkey",
        level:"BEGINNER",
        type:"Game",
        yearlevel:"1-4",
        subjectmatter:"Science"

    },
    {
        img:"images/projects/Project06.png" ,
        id:"6",
        suscription:"Premium",
        title:"Debugging",
        level:"ADVANCED",
        type:"Augmented Reality",
        yearlevel:"9-13",
        subjectmatter:"Computer Science"

    },
    {
        img:"images/projects/Project07.png" ,
        id:"7",
        suscription:"Free",
        title:"About me",
        level:"BEGINNER",
        type:"Animation",
        yearlevel:"1-4",
        subjectmatter:"Language"
        

    },
    {
        img:"images/projects/Project08.png" ,
        id:"8",
        suscription:"Premium",
        title:"I am here!",
        level:"BEGINNER",
        type:"Animation",
        yearlevel:"5-6",
        subjectmatter:"Computer Science"

    },
    {
        img:"images/projects/Project09.png" ,
        id:"9",
        suscription:"Free",
        title:"Funny faces",
        level:"BEGINNER",
        type:"Game",
        yearlevel:"1-4",
        subjectmatter:"Art"

    },
    {
        img:"images/projects/Project10.png" ,
        id:"10",
        suscription:"Premium",
        title:"It tickles!",
        level:"INTERMEDIATE",
        type:"Animation",
        yearlevel:"7-8",
        subjectmatter:"Maths"


    },
    {
        img:"images/projects/Project11.png" ,
        id:"11",
        suscription:"Premium",
        title:"Penguin in a desert!",
        level:"BEGINNER",
        type:"Chatbot",
        yearlevel:"5-6",
        subjectmatter:"Science"


    },
    {
        img:"images/projects/Project12.png" ,
        id:"12",
        suscription:"Premium",
        title:"Time Travel",
        level:"ADVANCED",
        type:"Animation",
        yearlevel:"9-13",
        subjectmatter:"Science"

    },
    {
        img:"images/projects/Project13.png" ,
        id:"13",
        suscription:"Free",
        title:"Birthday Card",
        level:"BEGINNER",
        type:"Chatbot",
        yearlevel:"1-4",
        subjectmatter:"Art"

    },
    {
        img:"images/projects/Project14.png" ,
        id:"14",
        suscription:"Free",
        title:"The Lion and the Mouse",
        level:"BEGINNER",
        type:"Animation",
        yearlevel:"1-4",
        subjectmatter:"Art"

    },
    {
        img:"images/projects/Project15.png" ,
        id:"15",
        suscription:"Premium",
        title:"The Lion in the Forest",
        level:"ADVANCED",
        type:"Augmented Reality",
        yearlevel:"9-13",
        subjectmatter:"Computer Science"

    }
];
const Subscription=[

    {
        id:1,
        checked:false,
        label:"Free"
    },
    {
        id:2,
        checked:false,
        label:"Premium"
    }

];

const YearLevel=[
    {
        id: 1,
        checked:false,
        label: "1-4",
      },
      {
        id: 2,
        checked:false,
        label: "5-6",
      },
      {
        id: 3,
        checked:false,
        label: "7-8",
      },
      {
        id: 4,
        checked:false,
        label: "9-13",
      }
      
];
const SubjectMatter=[
    {
        id:1,
        checked:false,
        label:"Computer Science"
    },
    {
       id:2,
       checked:false,
       label:"Maths"
       },
       {
           id:3,
           checked:false,
           label:"Science"
           },
           {
               id:4,
               checked:false,
               label:"Language"
               },
               {
                   id:5,
                   checked:false,
                   label:"Art"
                   },
                   {
                       id:6,
                       checked:false,
                       label:"Music"
                       }
      
];
const ActivityType= [
    
        {

            id:1,
            checked:false,
            label:"Animation",
          },
          {
      
            id:2,
            checked:false,
            label:"Game",
          },
          {
      
            id:3,
            checked:false,
            label:"Chatbot",
          },
          {
      
            id:4,
            checked:false,
            label:"Augmented Reality",
          }
        


    
];
export default ProjectList; 
export {ActivityType,Subscription,SubjectMatter,YearLevel};



