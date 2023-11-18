var app = Vue.createApp({
  data() {
    return {
      msg: "Welcome to Vue World",
      count: 0,
      name: {
        firstName: "",
        lastName: ""
      },
      email: "",
      num: "",
      result: "",
      activeClass: "red",
      courses: [
        {
          id: 1,
          name: "Web Development",
          description: "This is Web Development Course",
          img: "https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png",
          price: 200
        },
        {
          id: 2,
          name: "Ghrapics Design",
          description: "This is Ghrapics Design Course",
          img: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_768,h_439/https://assets.designhill.com/design-blog/wp-content/uploads/2018/08/post-s-768x439.jpg",
          price: 100
        },
        {
          id: 3,
          name: "Digital Marketing",
          description: "This is Digital Marketing Course",
          img: "https://usa.bootcampcdn.com/wp-content/uploads/sites/119/2020/11/DM_blog_post_image_03.jpg",
          price: 150
        },
        {
          id: 4,
          name: "Seo",
          description: "This is Seo Course",
          img: "https://www.oberlo.com/media/1603954182-seo-article-header.png",
          price: 50
        },
        {
          id: 5,
          name: "Machine Learning",
          description: "This is Machine Learning Course",
          img: "https://www.fsm.ac.in/blog/wp-content/uploads/2022/08/ml-e1610553826718.jpg",
          price: 250
        },
        {
          id: 6,
          name: "Data Science",
          description: "This is Data Science Course",
          img: "https://assets-global.website-files.com/63ccf2f0ea97be12ead278ed/644a18b637053fa3709c5ba2_what-is-data-science.jpg",
          price: 300
        },
      ],
      newCourse: {},
      aboutMe: {
        Name: "Md Shijan Ali",
        Job: "Front End Developer",
        Office: "Badda, Dhaka",
        WebSite: "www.facebook.com"
      },
      mobile: ""
    }
  },


  watch: {
    mobile(newValue, oldValue) {
      console.log(newValue)

      if (isNaN(newValue)) {
        alert('Enter Valid Mobile Number')
        this.mobile = oldValue
      }

      if (newValue.length == 11) {
        alert("An OTP has benn sent")
      }
    },
    'name.firstName': function (newValue, oldValue) {
      // console.log(newValue,oldValue)
    },
    name: {
      deep: true,
      handler: function (newValue, oldValue) {
        console.log(newValue, oldValue)
      }
    }
  },


  methods: {
    addCorse(e) {
      e.preventDefault();
      const form = e.target
      const name = form.name.value
      const description = form.description.value
      const img = form.img.value
      const price = form.price.value
      const data = {
        id: this.courses.length + 1,
        name,
        description,
        img,
        price
      }
      console.log(data)
      this.courses.unshift(data)
      this.resetForm();
      
    },
    
resetForm() {
  // Reset the form data properties to clear the form inputs
  this.name = '';
  this.description = '';
  this.img = '';
  this.price = '';
},
    handleDelete(course) {
      // console.log(course.id)
      this.courses = this.courses.filter(cor => cor.id !== course.id )
    },
    handleIncrement(val) {
      this.count = this.count +  val
    },
    handleDecrement(val) {
      this.count = this.count - val
    },
    
    handleKeyup(e) {
      console.log(e.target.value)
      this.name = e.target.value
    },
    handleSubmit(e) {
      e.preventDefault();
      this.name = e.target.name.value
      this.email = e.target.email.value
    },
    
    getDouble() {
      this.result = this.num * 2
      console.log(typeof this.num)
    },
    getSquare() {
      this.result = this.num * this.num
    },
    addTen() {
      this.result = this.num + 10
    },
    reset() {
      this.num = ""
      this.result = ""
    },
    setClass(className) {
      this.activeClass = className
    }
  }
})

app.mount("#app")