const Header = "Welcome";

const Navbar_data = [
    {id: 1, url: '#banner', label: 'Home'},
    {id: 2, url: '#education', label: 'Education'},
    {id: 3, url: '#work', label: 'Work Experience'},
    {id: 4, url: '#project', label: 'Projects'},
    {id: 5, url: '#honors', label: 'Honors and Volunteering'}
];

const Home_data = {
    Heading: 'Rizky Alviandra',
    Description: 'Hello, I am a Frontend Developer who learn about javascript and interest in IT Security',
}

const Education_data = {
    Heading: 'Education',
    Education_list: [
        {
            Label: 'State Polytechnic of Malang',
            Description: 'I majored in information technology and graduated in 2019',
            Image_url: 'images/polinema.png'
        },
        {
            Label: 'Vocational High School 8 Malang',
            Description: 'I majored in Computer and Network Engineering and graduated in 2015',
            Image_url: 'images/smk-8-logo.png'
        },
        {
            Label: 'Taman Siswa Junior High School Malang',
            Description: 'I graduated in 2012',
            Image_url: 'images/taman-siswa.png'
        },
        {
            Label: 'State Elementary School Kauman 1 Malang',
            Description: 'I graduated in 2009',
            Image_url: 'images/kauman.jpg'
        },
    ]
}

const Working_data = {
    Heading: 'Working Experience',
    Working_list: [
        {
            Level: 'Full Time',
            Position: 'Frontend Developer',
            Company: 'PT. Trimagnus Prima Dharma',
            Longest: 'Sept 2019 - Present',
            Image_url: 'images/tpd.png'
        },
        {
            Level: 'Internship',
            Position: 'Software Engineer',
            Company: 'PT. Mavens Mitra Perkasa ',
            Longest: 'Aug 2018 - Sept 2018',
            Image_url: 'images/mavens.jpeg'
        },
        {
            Level: 'Internship',
            Position: 'IT Support',
            Company: 'PT. Tempina Media Grafika',
            Longest: 'Aug 2013 - Jan 2014',
            Image_url: 'images/unnamed.png'
        },
    ]
}

const Mock_data = {
    Header,
    Navbar_data,
    Home_data,
    Education_data,
    Working_data
}

export default Mock_data