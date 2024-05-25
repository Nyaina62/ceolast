<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RegistrationController extends AbstractController
{
    #[Route('/registration/informations-personnelles', name: 'personal_register')]
    public function index(): Response
    {
        return $this->render('registration/index.html.twig', [
            'controller_name' => 'RegistrationController',
        ]);
    }
    #[Route('/registration/informations-professionnelles', name: 'professional_register')]
    public function professional_registration(): Response
    {
        return $this->render('registration/professional.html.twig', [
            'controller_name' => 'RegistrationController',
        ]);
    }
}
