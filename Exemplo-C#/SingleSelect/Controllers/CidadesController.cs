using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SingleSelect.Models;

namespace SingleSelect.Controllers
{
    public class CidadesController : Controller
    {
        // GET: Cidades
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ListaCidades()
        {
            List<Cidade> Cidades = new List<Cidade>();

            var Cidade = new Cidade() { Id=1, Nome="Jundiaí" };

            var Cidade2 = new Cidade() {Id=2,Nome="São Paulo" };

            var Cidade3 = new Cidade() { Id=3,Nome="Rio de Janeiro"};

            Cidades.Add(Cidade);

            Cidades.Add(Cidade2);

            Cidades.Add(Cidade3);         
        
            return Json(Cidades, JsonRequestBehavior.AllowGet);
        }
    }
}