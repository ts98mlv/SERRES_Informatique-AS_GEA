<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="HomePage")
     */
    public function index(): Response
    {
        return $this->render('main/accueil.html.twig');
    }

    /**
     * @Route("/contact", name="Contact")
     */
    public function contacter(Request $request): Response {

        $contactForm = $this->createFormBuilder()
            ->add("nom", TextType::class)
            ->add("prenom", TextType::class)
            ->add("email", EmailType::class)
            ->add("message", TextareaType::class)
            ->getForm()
        ;

        $contactForm->handleRequest($request);

        //traitement du formulaire après soumission
        if ($contactForm->isSubmitted() && $contactForm->isValid()) {
            $data = $contactForm->getData();
        }

        return $this->render("main/contact.html.twig", [
            "contactForm" => $contactForm->createView()
        ]);
    }

    /**
     * @Route ("/formation", name="formation")
     */
    public function pageFormation(){
        return $this->render("main/formation.html.twig");
    }

    /**
     * @Route ("/mentionsLegales", name="mentionsLegales")
     */
    public function mentionsLegales(){
        return $this->render("main/mentionsLegales.html.twig");
    }
}
