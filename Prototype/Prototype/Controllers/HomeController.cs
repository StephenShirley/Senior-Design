using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Web.Mvc;

namespace Prototype.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            
            return View();
        }

        public JsonResult getTsaCheckpoint(string shortcode)
        {
            WebClient client = new WebClient();
            string information = client.DownloadString("http://apps.tsa.dhs.gov/mytsawebservice/GetAirportCheckpoints.ashx?ap=" + shortcode);

            return Json(information, JsonRequestBehavior.AllowGet);
        }
        

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}